package digitsv1;

import java.util.Scanner;

public class Digitsv1
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);

        System.out.println("Enter four digits (0...9):");
        System.out.print("The first digit: ");
        int first = keyboard.nextInt();
        System.out.print("The second digit: ");
        int second = keyboard.nextInt();
        System.out.print("The third digit: ");
        int third = keyboard.nextInt();
        System.out.print("The fourth digit: ");
        int fourth = keyboard.nextInt();

        if (first == 0) {
            System.out.print("The number is " + second + third + fourth);
            return;
        }
        System.out.print("The number is "+ first + second + third + fourth);
    }
}
