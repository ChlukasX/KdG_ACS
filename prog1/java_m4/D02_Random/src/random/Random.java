package random;

public class Random
{
    public static void main(String[] args)
    {
        java.util.Random random = new java.util.Random();

        for (int i = 0; i != 7; i++){
            int number = random.nextInt(6);
            System.out.print(number + " ");
        }
        System.out.println();
        for (int i = 0; i != 4; i++){
            boolean bool = random.nextBoolean();
            System.out.print(bool + " ");
        }
        System.out.println();
        for (int i = 0; i != 3; i++){
            double decimal = random.nextDouble(1);
            System.out.print(decimal + " ");
        }
    }
}
