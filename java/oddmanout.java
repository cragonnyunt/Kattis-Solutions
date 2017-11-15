import java.util.ArrayList;
import java.util.Scanner;

public class oddmanout {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		for (int i = 1; i <= N; i++) {
			int G = scan.nextInt();
			ArrayList<Integer> singles = new ArrayList<>();
			for (int j = 0; j < G; j++) {
				int C = scan.nextInt();
				if (singles.contains(C))
					singles.remove((Object) C);
				else
					singles.add(C);
			}
			System.out.printf("Case #%d: %d%n", i, singles.get(0));
		}
		scan.close();
	}
}
