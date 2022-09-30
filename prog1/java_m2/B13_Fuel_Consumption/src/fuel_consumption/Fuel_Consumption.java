package fuel_consumption;

import java.util.Scanner;

public class Fuel_Consumption
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter the previous mileage: ");
        int previous = keyboard.nextInt();
        System.out.print("Enter current mileage: ");
        int current = keyboard.nextInt();
        System.out.print("Enter amount of liters refilled: ");
        double fuel = keyboard.nextDouble();

        int distance = current - previous;
        double sum = distance / fuel;

        System.out.print("Consumption for " + distance + "km driven: " + sum + " liters/100km");
    }
}
