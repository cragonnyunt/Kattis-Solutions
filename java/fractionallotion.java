import java.util.Scanner;

public class fractionallotion {
	static final int[] xqueue = new int[10000];
	static {
		for (int n = 1; n <= xqueue.length; n++) {
			int x = 0;
			for (int y = 1; y <= n; y++) {
				if (((n * n) % y) == 0)
					x++;
			}
			xqueue[n - 1] = x;
		}
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNext()) {
			String input = scan.next();
			System.out.println(xqueue[Integer.parseInt(input.substring(2)) - 1]);
		}
		scan.close();
	}
}
