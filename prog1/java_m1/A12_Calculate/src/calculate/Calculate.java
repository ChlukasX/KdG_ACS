package calculate;

import java.util.Scanner;

public class Calculate
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int first = keyboard.nextInt();
        System.out.print("Enter another number: ");
        int second = keyboard.nextInt();
        System.out.println("Enter an operation: ");
        System.out.println("1. add");
        System.out.println("2. subtract");
        System.out.println("3. multiply");
        System.out.println("4. divide");
        System.out.println("5. exponentiation");
        int choice = keyboard.nextInt();

        int sum = 0;
        if (choice == 1)
            sum = first + second;
        else if (choice == 2)
            sum = first - second;
        else if (choice == 3)
            sum = first * second;
        else if (choice == 4)
            sum = first / second;
        else if (choice == 5)
        {
            int count = 1;
            sum = first;
            while (count != second)
            {
                sum = sum * first;
                count++;
            }
        }
        System.out.println("Your choice: " + choice);
        System.out.print(sum);
    }
}
