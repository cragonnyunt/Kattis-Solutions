import java.util.Scanner;

public class chess2 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			char _X_col = scan.next().charAt(0);
			int _X_row = scan.nextInt();
			char _Y_col = scan.next().charAt(0);
			int _Y_row = scan.nextInt();

			int X_col = _X_col - 'A';
			int X_row = 8 - _X_row;
			int Y_col = _Y_col - 'A';
			int Y_row = 8 - _Y_row;

			if (X_col == Y_col && X_row == Y_row)
				System.out.println("0 " + _X_col + " " + _X_row);
			else {
				int X_sum = X_col + X_row;
				int Y_sum = Y_col + Y_row;
				if ((X_sum + Y_sum) % 2 == 1)
					System.out.println("Impossible");
				else if (X_sum == Y_sum || Y_col - X_col == Y_row - X_row)
					System.out.println("1 " + _X_col + " " + _X_row + " " + _Y_col + " " + _Y_row);
				else {
					boolean isFound = false;
					for (int i = 1; X_row + i < 8 && X_col + i < 8; i++)
						if (isFound = find_mid_chess_field(X_col + i, X_row + i, X_col, X_row, Y_col, Y_row))
							break;
					if (!isFound)
						for (int i = 1; X_row - i >= 0 && X_col - i >= 0; i++)
							if (isFound = find_mid_chess_field(X_col - i, X_row - i, X_col, X_row, Y_col, Y_row))
								break;
					if (!isFound)
						for (int i = 0; X_row + i < 8 && X_col - i >= 0; i++)
							if (isFound = find_mid_chess_field(X_col - i, X_row + i, X_col, X_row, Y_col, Y_row))
								break;
					if (!isFound)
						for (int i = 0; X_row - i >= 0 && X_col + i < 8; i++)
							if (isFound = find_mid_chess_field(X_col + i, X_row - i, X_col, X_row, Y_col, Y_row))
								break;
				}
			}
		}
		scan.close();
	}

	static char toCol(int col) {
		return (char) ('A' + col);
	}

	static int toRow(int row) {
		return 8 - row;
	}

	static boolean find_mid_chess_field(int new_X_col, int new_X_row, int X_col, int X_row, int Y_col, int Y_row) {
		if (new_X_col + new_X_row == Y_col + Y_row || Y_col - new_X_col == Y_row - new_X_row) {
			System.out.println("2 " + toCol(X_col) + " " + toRow(X_row) + " " + toCol(new_X_col) + " "
					+ toRow(new_X_row) + " " + toCol(Y_col) + " " + toRow(Y_row));
			return true;
		}
		return false;
	}
}
