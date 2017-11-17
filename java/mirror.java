import java.util.Scanner;

public class mirror {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		for (int i = 1; i <= T; i++) {
			int R = scan.nextInt();
			int C = scan.nextInt();
			char[][] image = new char[R][C];
			for (int j = 0; j < R; j++) {
				String line = scan.next();
				for (int k = 0; k < C; k++)
					image[j][k] = line.charAt(k);
			}
			System.out.printf("Test %d%n", i);
			for (int j = R - 1; j >= 0; j--) {
				for (int k = C - 1; k >= 0; k--)
					System.out.print(image[j][k]);
				System.out.println();
			}
		}
		scan.close();
	}
}
