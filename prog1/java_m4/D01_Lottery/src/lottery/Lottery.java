package lottery;

import java.util.*;

public class Lottery
{
    public static void main(String[] args)
    {
        Random random = new Random();

        for (int i = 0; i != 7; i++){
            int number = random.nextInt(45);
            System.out.print(number + " ");
        }
    }
}
