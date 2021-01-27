using System;
namespace Item{

// Electronic Class which will be inherited by Fans,Acs,Bulbs Class
public class Electronic{
  
  // Constructor to initialize the Electronic item's name 
  public Electronic(DeviceType Device,int Id,int DeviceId)
  {
  this.Id = Id;
  this.DeviceId = DeviceId;
  this.TypeOfDevice = Device;
  }

  public int Id {get; set;}
  public int DeviceId {get; set;}
  public bool IsSwitchedOn{ get; set;}
  public DeviceType TypeOfDevice { get; set; }

  public string Name
  {
    get
    {
      switch(this.TypeOfDevice)
      {
        case DeviceType.Fan :
                return "Fan";
        case DeviceType.Ac :
                return "Ac";
        case DeviceType.Bulb:
                return "Bulb";                
      }
      return "No Device";
    }
    set
    {
    }
  }

  // Get the Status of Device 
  public string DeviceStatus(bool IsSwitchedOn)
  {
    return IsSwitchedOn ? "ON" : "OFF";
  }

  // This will display the name with the status of Electronic Item
  public void Display()
  {
    Console.WriteLine($"{this.Id}.) {this.Name}{this.DeviceId} is \"{this.DeviceStatus(this.IsSwitchedOn)}\"");
  }

  // This function will be called to change the status of Device
  public void ChangeStatus()
  {
    this.IsSwitchedOn = !this.IsSwitchedOn;
  }
}

public enum DeviceType
  {
      None,
      Fan,
      Ac,
      Bulb
  }
}