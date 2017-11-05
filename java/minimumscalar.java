import java.util.Arrays;
import java.util.Scanner;

public class minimumscalar {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		for (int i = 1; i <= T; i++) {
			int n = scan.nextInt();
			long[] v1 = new long[n];
			long[] v2 = new long[n];
			for (int j = 0; j < n; j++)
				v1[j] = scan.nextLong();
			for (int j = 0; j < n; j++)
				v2[j] = scan.nextLong();
			Arrays.sort(v1);
			Arrays.sort(v2);
			long product = 0;
			for (int index = 0; index < n; index++)
				product += v1[index] * v2[n - index - 1];
			System.out.println("Case #" + i + ": " + product);
		}
		scan.close();
	}
}
