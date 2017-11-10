import java.util.Scanner;

public class hidingplaces {
	static int[][] chessBoard;
	static int level, maxlevel;

	static void singleFill(int row, int col, int level) {
		chessBoard[row][col] = level;
		if (col >= 2) {
			if (row != 0)
				fillToList(row - 1, col - 2, level);
			if (row != 7)
				fillToList(row + 1, col - 2, level);
		}
		if (row <= 5) {
			if (col != 0)
				fillToList(row + 2, col - 1, level);
			if (col != 7)
				fillToList(row + 2, col + 1, level);
		}
		if (col <= 5) {
			if (row != 0)
				fillToList(row - 1, col + 2, level);
			if (row != 7)
				fillToList(row + 1, col + 2, level);
		}
		if (row >= 2) {
			if (col != 0)
				fillToList(row - 2, col - 1, level);
			if (col != 7)
				fillToList(row - 2, col + 1, level);
		}
	}

	static void fillToList(int row, int col, int level) {
		if (chessBoard[row][col] == 0 || chessBoard[row][col] > level)
			singleFill(row, col, ++level);
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		while (n-- > 0) {
			chessBoard = new int[8][8];
			level = maxlevel = 1;
			String knight = scan.next();
			int col = knight.charAt(0) - 'a';
			int row = 8 - Character.getNumericValue(knight.charAt(1));
			singleFill(row, col, level);
			for (int i = 0; i < 8; i++)
				for (int j = 0; j < 8; j++)
					maxlevel = Math.max(maxlevel, chessBoard[i][j]);
			System.out.print((maxlevel - 1) + " ");
			for (int i = 0; i < 8; i++)
				for (int j = 0; j < 8; j++)
					if (chessBoard[i][j] == maxlevel)
						System.out.print(String.valueOf((char) ('a' + j)) + (8 - i) + " ");
			System.out.println();
		}
		scan.close();
	}
}
