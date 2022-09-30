package digitsv2;

import java.util.Scanner;

public class Digitsv2
{
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter a 4-digit whole number (1000...9999): ");
        String number = keyboard.nextLine();

        Integer.parseInt(number);
        int sum1 = 0;
        int sum = 0;
        while (number != null) {

            number++;
        }
        System.out.print(sum);
    }
}
