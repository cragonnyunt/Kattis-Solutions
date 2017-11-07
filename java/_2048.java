import java.util.Scanner;

public class _2048 {
	static int[][] tiles = new int[4][4];

	static void MergeCells(int[][] tiles, int row, int col, int row_diff, int col_diff) {
		if (tiles[row][col] == tiles[row + row_diff][col + col_diff]) {
			tiles[row][col] *= 2;
			tiles[row + row_diff][col + col_diff] = 0;
		}
	}

	static void ShiftLeft(int[][] tiles, int row) {
		int col_count = 0;
		for (int col = 0; col <= 3; col++)
			if (tiles[row][col] != 0)
				tiles[row][col_count++] = tiles[row][col];
		for (int col = col_count; col <= 3; col++)
			tiles[row][col] = 0;
	}

	static void ShiftUp(int[][] tiles, int col) {
		int row_count = 0;
		for (int row = 0; row <= 3; row++)
			if (tiles[row][col] != 0)
				tiles[row_count++][col] = tiles[row][col];
		for (int row = row_count; row <= 3; row++)
			tiles[row][col] = 0;
	}

	static void ShiftRight(int[][] tiles, int row) {
		int col_count = 3;
		for (int col = 0; col <= 3; col++)
			if (tiles[row][3 - col] != 0)
				tiles[row][col_count--] = tiles[row][3 - col];
		for (int col = col_count; col >= 0; col--)
			tiles[row][col] = 0;
	}

	static void ShiftDown(int[][] fromTiles, int col) {
		int row_count = 3;
		for (int row = 0; row <= 3; row++)
			if (fromTiles[3 - row][col] != 0)
				fromTiles[row_count--][col] = fromTiles[3 - row][col];
		for (int row = row_count; row >= 0; row--)
			fromTiles[row][col] = 0;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		for (int row = 0; row < 4; row++) {
			for (int col = 0; col < 4; col++)
				tiles[row][col] = scan.nextInt();
		}
		switch (scan.nextInt()) {
		case 0:
			for (int row = 0; row < 4; row++) {
				ShiftLeft(tiles, row);
				for (int col = 0; col < 3; col++)
					MergeCells(tiles, row, col, 0, 1);
				ShiftLeft(tiles, row);
			}
			break;
		case 1:
			for (int col = 0; col < 4; col++) {
				ShiftUp(tiles, col);
				for (int row = 0; row < 3; row++)
					MergeCells(tiles, row, col, 1, 0);
				ShiftUp(tiles, col);
			}
			break;
		case 2:
			for (int row = 0; row < 4; row++) {
				ShiftRight(tiles, row);
				for (int col = 0; col < 3; col++)
					MergeCells(tiles, row, 3 - col, 0, -1);
				ShiftRight(tiles, row);
			}
			break;
		default:
			for (int col = 0; col < 4; col++) {
				ShiftDown(tiles, col);
				for (int row = 0; row < 3; row++)
					MergeCells(tiles, 3 - row, col, -1, 0);
				ShiftDown(tiles, col);
			}
			break;
		}
		for (int row = 0; row < 4; row++) {
			for (int col = 0; col < 4; col++)
				System.out.print(tiles[row][col] + " ");
			System.out.println();
		}
		scan.close();
	}
}
