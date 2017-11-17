import java.util.Scanner;

public class sumkindofproblem {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int P = scan.nextInt();
		while (P-- > 0) {
			int K = scan.nextInt();
			int N = scan.nextInt();
			System.out.printf("%d %d %d %d%n", K, N * (N + 1) / 2, N * N, N * (N + 1));
		}
		scan.close();
	}
}
