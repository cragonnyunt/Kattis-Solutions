import java.util.ArrayList;
import java.util.Scanner;

public class zanzibar {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			ArrayList<Integer> turtles = new ArrayList<>();
			int t;
			while ((t = scan.nextInt()) != 0)
				turtles.add(t);
			int import_turtles = 0;
			for (int j = 1; j < turtles.size(); j++)
				import_turtles += Math.max(turtles.get(j) - turtles.get(j - 1) * 2, 0);
			System.out.println(import_turtles);
		}
		scan.close();
	}
}
