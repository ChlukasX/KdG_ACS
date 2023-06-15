package counting;

public class Counting
{
    public static void main(String[] args)
    {
        int down = 10;
        int up = 1;

        while (up != 11 && down != 0){
            System.out.println(up++ + " - " + down--);
        }
    }
}
