import java.util.ArrayList;
import java.util.Scanner;

public class weakvertices {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n;
		while ((n = scan.nextInt()) > 0) {
			int[][] matrix = new int[n][];
			for (int i = 0; i < n; i++) {
				ArrayList<Integer> v = new ArrayList<>(n);
				for (int j = 0; j < n; j++)
					if (scan.nextInt() == 1)
						v.add(j);
				matrix[i] = new int[v.size()];
				for (int j = 0; j < v.size(); j++)
					matrix[i][j] = v.get(j);
			}
			for (int i = 0; i < n; i++) {
				boolean isWeak = true;
				for (int v : matrix[i]) {
					OUT: for (int _v : matrix[v])
						for (int _i : matrix[i])
							if (_v == _i) {
								isWeak = false;
								break OUT;
							}
				}
				if (isWeak)
					System.out.printf("%d ", i);
			}
			System.out.println();
		}
		scan.close();
	}
}