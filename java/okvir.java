import java.util.Scanner;

public class okvir {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int M = scan.nextInt();
		int N = scan.nextInt();
		int U = scan.nextInt();
		int L = scan.nextInt();
		int R = scan.nextInt();
		int D = scan.nextInt();
		int ROWS = M + U + D;
		int COLS = N + R + L;
		char[][] framed_puzzle = new char[ROWS][COLS];
		for (int i = 0; i < ROWS; i++) {
			char ch = i % 2 == 0 ? '#' : '.';
			for (int j = 0; j < COLS; j++) {
				framed_puzzle[i][j] = ch;
				if (ch == '#')
					ch = '.';
				else
					ch = '#';
			}
		}
		for (int i = U; i < U + M; i++) {
			String text = scan.next();
			for (int j = L; j < L + N; j++)
				framed_puzzle[i][j] = text.charAt(j - L);
		}
		for (int i = 0; i < ROWS; i++) {
			for (int j = 0; j < COLS; j++)
				System.out.print(framed_puzzle[i][j]);
			System.out.println();
		}
		scan.close();
	}
}
