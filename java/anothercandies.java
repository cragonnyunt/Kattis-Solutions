import java.util.Scanner;

public class anothercandies {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			long N = scan.nextLong();
			long sum = 0;
			for (int i = 0; i < N; i++) {
				sum += scan.nextLong() % N;
				sum %= N;
			}
			System.out.println(sum % N == 0 ? "YES" : "NO");
		}
		scan.close();
	}
}
