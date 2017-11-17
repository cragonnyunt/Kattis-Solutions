import java.util.Scanner;

public class pot {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		int X = 0;
		while (N-- > 0) {
			int P = scan.nextInt();
			int p = P % 10;
			P /= 10;
			X += Math.pow(P, p);
		}
		System.out.println(X);
		scan.close();
	}
}
