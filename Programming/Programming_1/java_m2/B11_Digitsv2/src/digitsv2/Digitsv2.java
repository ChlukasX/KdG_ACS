package digitsv2;

import java.util.Scanner;

public class Digitsv2
{
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter a 4-digit whole number (1000...9999): ");
        int number = keyboard.nextInt();

        int loop = 0;
        int add = 0;
        int add1 = 0;
        while (loop != 2)
        {
            int sum = 0;
            add = sum + number;
            add = add;
            //add = add + add;
            loop++;
        }
        System.out.print(add);
    }
}
