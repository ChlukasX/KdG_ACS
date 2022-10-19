package asciitable;

import java.util.Scanner;

public class Ascii_Table
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        System.out.print("Enter the character do you want to draw: ");
        String character = keyboard.nextLine();
        System.out.print("Enter the width: ");
        int width = keyboard.nextInt();
        System.out.print("Enter the height: ");
        int height = keyboard.nextInt();
        int x = 0;
        int y = 0;

        while (y++ < height)
        {
            while (x++ < width)
            {
                if ((x > 1 && x < width) && (y != 1 && y != height)){
                    System.out.print(" ");
                }
                else
                    System.out.print(character);
            }
            System.out.println();
            x = 0;
        }
    }
}
