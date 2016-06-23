"Wackcoon" is designed to detect and repel animal pests from backyards.
This project:
- uses Node.js, Raspberry Pi, Raspbian, Linux, and Microsoft Cognitive Services, etc.
- takes pictures in intervals of 10 seconds 
- uses a camera and infrared sensor to detect raccoon movement at night
- compares each picture taken to the one before it 
- checks to see how close of a resemblance there is, as a diff file 

If, and only if, there is a significant difference noticed between two pictures, we use  cognitive services vision API 
to look for an animal (specifically a raccoon).
A confidence percentage of 90% or more triggers a buzzer to scare away the pest from the yard.
