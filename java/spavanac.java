import java.util.Scanner;

public class spavanac {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int H = scan.nextInt();
		int M = scan.nextInt();
		M -= 45;
        if(M < 0)
        {
            H--;
            M += 60;
            if (H < 0)
                H += 24;
        }
        System.out.printf("%d %d", H, M);
		scan.close();
	}
}
