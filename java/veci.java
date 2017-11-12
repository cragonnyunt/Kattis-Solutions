import java.util.Scanner;

public class veci {
	static int permuted = Integer.MAX_VALUE;

	static void getPer(char[] X, int k, int m, int number) {
		if (k == m) {
			int res = Integer.parseInt(new String(X));
			if (res > number && res < permuted)
				permuted = res;
		} else
			for (int i = k; i <= m; i++) {
				swap(X, k, i);
				getPer(X, k + 1, m, number);
				swap(X, k, i);
			}
	}

	static void swap(char[] x, int k, int i) {
		char tmp = x[k];
		x[k] = x[i];
		x[i] = tmp;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int X = scan.nextInt();
		char[] X_array = String.valueOf(X).toCharArray();
		getPer(X_array, 0, X_array.length - 1, X);
		System.out.println(permuted == Integer.MAX_VALUE ? "0" : permuted);
		scan.close();
	}
}
