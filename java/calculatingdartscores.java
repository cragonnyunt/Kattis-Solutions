import java.util.Arrays;
import java.util.Scanner;

public class calculatingdartscores {
	static String[] dart = new String[181];
	static final String[] area = { "single", "double", "triple" };
	static {
		Arrays.fill(dart, "impossible");
		for (int x3 = 0; x3 <= 20; x3++)
			for (int x2 = 0; x2 <= 20; x2++)
				for (int x1 = 0; x1 <= 20; x1++)
					for (int a = 1; a <= 3; a++)
						for (int b = 1; b <= 3; b++)
							for (int c = 1; c <= 3; c++) {
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

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		System.out.println(dart[n]);
		scan.close();
	}
}
