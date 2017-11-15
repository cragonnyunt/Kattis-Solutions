import java.util.Scanner;

public class onechicken {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		int M = scan.nextInt();
		int diff = M - N;
		if (diff > 0)
			System.out.printf("Dr. Chaz will have %s piece%s of chicken left over!", diff, diff > 1 ? "s" : "");
		else
			System.out.printf("Dr. Chaz needs %s more piece%s of chicken!", -diff, -diff > 1 ? "s" : "");
		scan.close();
	}
}
