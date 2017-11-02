import java.util.HashSet;
import java.util.Scanner;

public class chess {
	static HashSet<chess_field> getDiagonals(chess_field cf) {
		HashSet<chess_field> diagonals = new HashSet<>();
		for (int i = 1; cf.row + i < 8 && cf.column + i < 8; i++)
			diagonals.add(new chess_field(cf.row + i, cf.column + i));
		for (int i = 1; cf.row - i >= 0 && cf.column - i >= 0; i++)
			diagonals.add(new chess_field(cf.row - i, cf.column - i));
		for (int i = 0; cf.row + i < 8 && cf.column - i >= 0; i++)
			diagonals.add(new chess_field(cf.row + i, cf.column - i));
		for (int i = 0; cf.row - i >= 0 && cf.column + i < 8; i++)
			diagonals.add(new chess_field(cf.row - i, cf.column + i));
		return diagonals;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			String X_col = scan.next();
			int X_row = scan.nextInt();
			String Y_col = scan.next();
			int Y_row = scan.nextInt();
			chess_field X = new chess_field(X_row, X_col);
			chess_field Y = new chess_field(Y_row, Y_col);
			if (X.compareTo(Y) == 0)
				System.out.println("0 " + X);
			else {
				HashSet<chess_field> diagonals_X = getDiagonals(X);
				if (diagonals_X.contains(Y))
					System.out.println("1 " + X + " " + Y);
				else {
					HashSet<chess_field> diagonals_Y = getDiagonals(Y);
					diagonals_X.retainAll(diagonals_Y);
					if (diagonals_X.isEmpty())
						System.out.println("Impossible");
					else {
						chess_field mid_field = new chess_field(0, 0);
						for (chess_field s : diagonals_X)
							mid_field = s;
						System.out.println("2 " + X + " " + mid_field + " " + Y);
					}
				}
			}
		}
		scan.close();
	}
}

class chess_field implements Comparable<chess_field> {
	public int row, column;

	public int getRow() {
		return 8 - row;
	}

	public void setRow(int row) {
		this.row = 8 - row;
	}

	public char getCol() {
		return (char) ('A' + column);
	}

	public void setCol(String column) {
		this.column = column.charAt(0) - 'A';
	}

	public chess_field(int row, String column) {
		setCol(column);
		setRow(row);
	}

	public chess_field(int row, int column) {
		this.row = row;
		this.column = column;
	}

	public String toString() {
		return getCol() + " " + getRow();
	}

	public int compareTo(chess_field o) {
		int row_difference;
		return (row_difference = row - o.row) == 0 ? column - o.column : row_difference;
	}

	@Override
	public boolean equals(Object other) {
		return compareTo((chess_field) other) == 0;
	}

	@Override
	public int hashCode() {
		long hash = 13L;
		hash = (hash * 7) + row;
		hash = (hash * 7) + column;
		return (int) (2 ^ hash);
	}
}
