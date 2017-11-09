import java.util.Arrays;
import java.util.Scanner;

public class permutedarithmeticsequence {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		while (n-- > 0) {
			int m = scan.nextInt();
			int[] sequence = new int[m];
			int[] sorted_sequence = new int[m];
			for (int i = 0; i < m; i++)
				sequence[i] = sorted_sequence[i] = scan.nextInt();
			Arrays.sort(sorted_sequence);
			boolean isArithmetic = true;
			for (int i = 1; i < m - 1; i++)
				if (sorted_sequence[i] - sorted_sequence[i - 1] != sorted_sequence[i + 1] - sorted_sequence[i]) {
					isArithmetic = false;
					break;
				}
			if (!isArithmetic)
				System.out.println("non-arithmetic");
			else {
				boolean isPermutedByAsc = false;
				for (int i = 0; i < m; i++)
					if (sequence[i] != sorted_sequence[i]) {
						isPermutedByAsc = true;
						break;
					}
				for (int i = 0; i < m / 2; i++) {
					int tmp = sorted_sequence[i];
					sorted_sequence[i] = sorted_sequence[m - i - 1];
					sorted_sequence[m - i - 1] = tmp;
				}
				boolean isPermutedByDesc = false;
				for (int i = 0; i < m; i++)
					if (sequence[i] != sorted_sequence[i]) {
						isPermutedByDesc = true;
						break;
					}
				System.out.println(isPermutedByAsc && isPermutedByDesc ? "permuted arithmetic" : "arithmetic");
			}
		}
		scan.close();
	}
}
