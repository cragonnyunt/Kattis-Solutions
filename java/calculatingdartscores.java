import java.util.Arrays;
import java.util.Scanner;

public class calculatingdartscores {
	static final String[] dart = new String[181];
	static {
		final int[][] dartArea = new int[27][3];
		final int[][] score = new int[9261][3];
		final String[] area = { "single", "double", "triple" };
		Arrays.fill(dart, "impossible");
		int count = 0;
		for (int a = 1; a <= 3; a++)
			for (int b = 1; b <= 3; b++)
				for (int c = 1; c <= 3; c++) {
					dartArea[count][0] = a;
					dartArea[count][1] = b;
					dartArea[count++][2] = c;
				}
		count = 0;
		for (int x3 = 0; x3 <= 20; x3++)
			for (int x2 = 0; x2 <= 20; x2++)
				for (int x1 = 0; x1 <= 20; x1++) {
					score[count][0] = x3;
					score[count][1] = x2;
					score[count++][2] = x1;
				}
		for (int[] i : score) {
			for (int[] j : dartArea) {
				int a = j[0];
				int b = j[1];
				int c = j[2];
				int x3 = i[0];
				int x2 = i[1];
				int x1 = i[2];
				int dartScore = x3 * a + x2 * b + x1 * c;
				if (dart[dartScore] == "impossible") {
					StringBuilder sb = new StringBuilder();
					if (x3 != 0)
						sb.append(String.format("%s %d\n", area[a - 1], x3));
					if (x2 != 0)
						sb.append(String.format("%s %d\n", area[b - 1], x2));
					if (x1 != 0)
						sb.append(String.format("%s %d", area[c - 1], x1));
					dart[dartScore] = sb.toString();
				}
			}
		}
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println(dart[scan.nextInt()]);
		scan.close();
	}
}
