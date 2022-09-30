package summation;

import java.util.Scanner;

public class Summation
{
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        String message = "Enter a number (to stop enter 0): ";

        System.out.print(message);
        int number = keyboard.nextInt();
        int sum = 0;

        while (number != 0)
        {
            sum = sum + number;
            System.out.print(message);
            number = keyboard.nextInt();
        }
        System.out.print("The sum of the numbers is: " + sum);
    }
}
