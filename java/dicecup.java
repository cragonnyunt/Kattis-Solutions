import java.util.Scanner;

public class dicecup {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		int M = scan.nextInt();
		int min = Math.min(N, M);
		for (int i = min + 1; i < N + M + 2 - min; i++)
			System.out.println(i);
		scan.close();
	}
}
