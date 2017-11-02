import java.util.Scanner;

public class eightqueens {
	static boolean[][] board = new boolean[8][8];

	static boolean check_board() {
		for (int i = 0; i < 8; i++) {
			boolean row_existed = false;
			boolean column_existed = false;
			for (int j = 0; j < 8; j++) {
				if (board[i][j]) {
					if (!row_existed)
						row_existed = true;
					else
						return false;
				}
				if (board[j][i]) {
					if (!column_existed)
						column_existed = true;
					else
						return false;
				}
			}
			if (!row_existed || !column_existed)
				return false;
		}
		for (int j = 0; j < 8; j++) {
			boolean main_diagonal_1 = false;
			boolean main_diagonal_2 = false;
			boolean other_diagonal_1 = false;
			boolean other_diagonal_2 = false;
			for (int i = 0; i < 8 - j; i++) {
				if (board[i][i + j]) {
					if (!main_diagonal_1)
						main_diagonal_1 = true;
					else
						return false;
				}
				if (board[i + j][i]) {
					if (!main_diagonal_2)
						main_diagonal_2 = true;
					else
						return false;
				}
			}
			for (int i = 0; i <= j; i++) {
				if (board[i][j - i]) {
					if (!other_diagonal_1)
						other_diagonal_1 = true;
					else
						return false;
				}
				if (board[7 - i][7 - (j - i)]) {
					if (!other_diagonal_2)
						other_diagonal_2 = true;
					else
						return false;
				}
			}
		}
		return true;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		for (int i = 0; i < 8; i++) {
			String input = scan.nextLine();
			for (int j = 0; j < 8; j++)
				board[i][j] = input.charAt(j) == '*';
		}
		if (check_board())
			System.out.println("valid");
		else
			System.out.println("invalid");
		scan.close();
	}
}
