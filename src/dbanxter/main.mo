import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBanxter {
  stable var currentValue: Float = 500;
   currentValue := 500;

  stable var startTime = Time.now();
  startTime := Time.now();
  Debug.print(debug_show(startTime));

  let id = 7856383658;

  // Debug.print(debug_show(id));

public func topUp(amount: Float) {
   currentValue += amount;
   Debug.print(debug_show(currentValue));

  };

public func withdrawl(amount: Float) {
   let tempValue: Float = currentValue - amount;
   if (tempValue >= 0) { 
   currentValue -= amount;

   Debug.print(debug_show(currentValue));
  } else {
    Debug.print("Amount too large, currentValue less than zero")
  }
};

public query func checkBalance(): async Float {
  return currentValue;
};

  // topUp();

public func compound()  {
   let currentTime = Time.now();
   let timeElapsedNS = currentTime - startTime;
   let timeElapsedS = timeElapsedNS / 1000000000;
   currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
   startTime := currentTime;
 }

}