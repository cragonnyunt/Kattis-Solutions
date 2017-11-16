import java.util.ArrayList;
import java.util.Scanner;

public class cetvrta {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		ArrayList<Integer> xs = new ArrayList<>();
		ArrayList<Integer> ys = new ArrayList<>();
		for (int i = 0; i < 3; i++) {
			int x = scan.nextInt();
			if (xs.contains(x))
				xs.remove((Object) x);
			else
				xs.add(x);
			int y = scan.nextInt();
			if (ys.contains(y))
				ys.remove((Object) y);
			else
				ys.add(y);
		}
		System.out.printf("%d %d", xs.get(0), ys.get(0));
		scan.close();
	}
}
