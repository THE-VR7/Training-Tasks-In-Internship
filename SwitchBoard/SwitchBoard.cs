using System;
using System.Linq;
using System.Collections.Generic; 
using Item;
using ElectronicItem;

class SwitchBoard {

// Show every Item with their Name and Status
public static void ShowElectronicMenu(List<Electronic> Devices)
{
  Console.WriteLine("\nElectronic Items List: ");
  for(int index=0;index<Devices.Count ;index++)
  {
    Devices.ElementAt(index).Display();
  }
}

public static void ChangeStatusOfElectronicItem(List<Electronic> Devices)
{
  while(true)
  {
    Console.Write("Enter the Device Number or Press 0 to Exit : ");
    int selectedOption =  Convert.ToInt32(Console.ReadLine());
    
    if(selectedOption == 0)
    {
      break;
    }

    SelectAgain :
      try
      {
        Electronic selectedDevice = Devices.Single(Device => Device.Id == selectedOption);
        
        // Options which will be provided when user selects a valid Device
        Console.WriteLine($"\n1.) Switch {selectedDevice.Name}{selectedDevice.DeviceId} {selectedDevice.DeviceStatus(!selectedDevice.IsSwitchedOn)}");
        Console.WriteLine("2.) Back");
        int currentSelection = Convert.ToInt32(Console.ReadLine());
        
        if(currentSelection == 1)
        {
          selectedDevice.ChangeStatus();
        }
        else if(currentSelection != 2)
        {
          Console.WriteLine("\nWrong Selection -->  Select Again");
          goto SelectAgain;
        }
      }
      catch(Exception )
      {
        Console.WriteLine("\nNo Device with that Device Number, Please Select Again\n");
        continue;
      }

    ShowElectronicMenu(Devices);  
  }
  Console.WriteLine("Good Bye!!");
}

    // Main Function
    static void Main(string[] args) 
    {

      // Take the details of the quantity of fans,Acs & Bulbs
      Console.WriteLine("Enter the Required Details :");
      Console.Write("Number of Fans: ");
      int NumberOfFan =  Convert.ToInt32(Console.ReadLine());
      Console.Write("Number of ACs: ");
      int NumberOfAc =  Convert.ToInt32(Console.ReadLine());
      Console.Write("Number of Bulbs: ");
      int NumberOfBulb =  Convert.ToInt32(Console.ReadLine());
       
      // Creating List of superclass to contain elements of every superclass
      List<Electronic> Device = new List<Electronic>();

      // Initializing the Items with their default Values
      int totalItem = 1;
      for(int index=0;index<NumberOfFan;index++)
      {
        Device.Add(new Fan(DeviceType.Fan,totalItem++,index+1));
      }
      for(int index=0;index<NumberOfAc;index++)
      {
        Device.Add(new Ac(DeviceType.Ac,totalItem++,index+1));
      }
      for(int index=0;index<NumberOfBulb;index++)
      {
        Device.Add(new Bulb(DeviceType.Bulb,totalItem++,index+1));
      }
      
      // Show the Initial Menu Of Items
      ShowElectronicMenu(Device);
      
      // This function will execute the whole process of changing the status of Electronic Item
      ChangeStatusOfElectronicItem(Device);
    }
}