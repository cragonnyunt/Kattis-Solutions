import java.util.Scanner;

public class prva {
	static String comp(String word, StringBuilder sb) {
		if (sb.length() >= 2)
			if (word.isEmpty())
				return sb.toString();
			else
				return word.compareTo(sb.toString()) < 0 ? word : sb.toString();
		return word;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int R = scan.nextInt();
		int C = scan.nextInt();
		char[][] puzzle = new char[R][C];
		for (int i = 0; i < R; i++) {
			String str = scan.next();
			for (int j = 0; j < C; j++)
				puzzle[i][j] = str.charAt(j);
		}
		String word = "";
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < R; i++) {
			for (int j = 0; j < C; j++) {
				if (puzzle[i][j] != '#') {
					sb = new StringBuilder();
					if (j == 0 || (j != 0 && puzzle[i][j - 1] == '#'))
						for (int k = j; k < C && puzzle[i][k] != '#'; k++)
							sb.append(puzzle[i][k]);
					word = comp(word, sb);
					sb = new StringBuilder();
					if (i == 0 || (i != 0 && puzzle[i - 1][j] == '#'))
						for (int k = i; k < R && puzzle[k][j] != '#'; k++)
							sb.append(puzzle[k][j]);
					word = comp(word, sb);
				}
			}
		}
		System.out.println(word);
		scan.close();
	}
}
