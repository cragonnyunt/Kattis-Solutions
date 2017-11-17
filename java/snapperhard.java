import java.util.Scanner;

public class snapperhard {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		for (int i = 1; i <= T; i++) {
			int N = scan.nextInt();
			int K = scan.nextInt() + 1;
			System.out.printf("Case #%d:%s%n", i, K % Math.pow(2, N) == 0 ? "ON" : "OFF");
		}
		scan.close();
	}
}
