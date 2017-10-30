import java.io.Console;
import java.util.HashMap;
import java.util.Scanner;

public class consecutivesums {
	static HashMap<Integer, Integer> partial_sums = new HashMap<>(565);

	static {
		int N;
		for (int i = 2; (N = i * (i + 1) / 2) < 1000000000; i++)
			partial_sums.put(i, N);
	}

	static String getAnswer(int start, int count, int result) {
		StringBuilder sb = new StringBuilder(result + "  = ");
		for (int i = 0; i < count; i++)
			sb.append((start + i) + " + ");
		return sb.substring(0, sb.length() - 3);
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			int N = scan.nextInt();
			boolean possible = false;
			for (int i : partial_sums.keySet()) {
				int difference = N - partial_sums.get(i);
				if (difference == 0) {
					System.out.println(getAnswer(1, i, N));
					possible = true;
					break;
				} else if (difference < 0)
					break;
				else if (difference % i == 0) {
					System.out.println(getAnswer((2 * N - i * (i - 1)) / (2 * i), i, N));
					possible = true;
					break;
				}
			}
			if (!possible)
				System.out.println("IMPOSSIBLE");
		}
		scan.close();
	}
}
