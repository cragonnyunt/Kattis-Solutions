import java.util.Scanner;

public class imageprocessing {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int H = scan.nextInt();
		int W = scan.nextInt();
		int N = scan.nextInt();
		int M = scan.nextInt();
		int[][] image = new int[H][W];
		for (int i = 0; i < H; i++)
			for (int j = 0; j < W; j++)
				image[i][j] = scan.nextInt();
		int[][] kernel = new int[N][M];
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				kernel[i][j] = scan.nextInt();
		for (int i = 0; i < H - N + 1; i++) {
			for (int j = 0; j < W - M + 1; j++) {
				int sum = 0;
				int kX = N - 1;
				for (int x = i; x < i + N; x++) {
					int kY = M - 1;
					for (int y = j; y < j + M; y++)
						sum += image[x][y] * kernel[kX][kY--];
					kX--;
				}
				System.out.print(sum + " ");
			}
			System.out.println();
		}
		scan.close();
	}
}
