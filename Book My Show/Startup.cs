using AutoMapper;
using Services.Mappings;
using Models.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Models;
using SimpleInjector;
using PetaPoco;
using Services.Interfaces;
using Services.Implementations;
using PetaPoco.Providers;
using Microsoft.IdentityModel.Protocols;
using System.Configuration;
using System.Data;

namespace BookMyShow
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            // Set to false. This will be the default in v5.x and going forward.
            container.Options.ResolveUnregisteredConcreteTypes = false;
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        private Container container = new SimpleInjector.Container();

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddRazorPages().AddRazorRuntimeCompilation();
            services.AddControllersWithViews();
            //services.AddLogging();
            //services.AddLocalization();

            IConfiguration connString = Configuration.GetSection("ApplicationSettings");
            // Application Settings
            services.Configure<ApplicationSettings>(connString);

            services.AddDbContext<AuthenticationDb>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            
            services.AddDefaultIdentity<ApplicationUser>()
                .AddEntityFrameworkStores<AuthenticationDb>();

            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 4;
            });

            var key = Encoding.UTF8.GetBytes(Configuration["ApplicationSettings:JWT_SECRET"].ToString());

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = false;
                x.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });

            
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    );
            });

            //services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            services.AddAutoMapper(typeof(AutomapperProfile));

            // Sets up the basic configuration that for integrating Simple Injector with
            // ASP.NET Core by setting the DefaultScopedLifestyle, and setting up auto
            // cross wiring.
            services.AddSimpleInjector(container, options =>
            {
                // AddAspNetCore() wraps web requests in a Simple Injector scope and
                // allows request-scoped framework services to be resolved.
                options.AddAspNetCore()

                    // Ensure activation of a specific framework type to be created by
                    // Simple Injector instead of the built-in configuration system.
                    // All calls are optional. You can enable what you need. For instance,
                    // ViewComponents, PageModels, and TagHelpers are not needed when you
                    // build a Web API.
                    .AddControllerActivation()
                    .AddViewComponentActivation()
                    .AddPageModelActivation()
                    .AddTagHelperActivation();

                // Optionally, allow application components to depend on the non-generic
                // ILogger (Microsoft.Extensions.Logging) or IStringLocalizer
                // (Microsoft.Extensions.Localization) abstractions.
                //options.AddLogging();
                //options.AddLocalization();
                //                options.AutoCrossWireFrameworkComponents = true;
            });
            InitializeContainer();
        }


        // Container to contain Interfaces with its implementations
        private void InitializeContainer()
        {

            //var conStr = ConfigurationManager.ConnectionStrings["DBConnection"].ConnectionString;

            // Register petapoco with simpleInjector
            container.Register<Database>(() =>
            new Database("Server=DESKTOP-N79P51I;Database=BookMyShow;Trusted_Connection=True;MultipleActiveResultSets=True", 
            new SqlServerDatabaseProvider()),
            Lifestyle.Scoped);

            //container.RegisterSingleton(() => GetMapper(container));

            // Add application services. For instance:
            container.Register<IUserService, UserService>();
            container.Register<IMovieService, MovieService>();
            container.Register<IBookingService, BookingService>();
            container.Register<ISearchService, SearchService>();
        }

     



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // UseSimpleInjector() finalizes the integration process.
            app.UseSimpleInjector(container);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseAuthentication();

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCors("CorsPolicy");
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

            // Always verify the container
            container.Verify();
        }
    }
}