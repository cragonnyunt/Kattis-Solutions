import java.util.HashSet;
import java.util.Scanner;

public class everywhere {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			int cities = scan.nextInt();
			HashSet<String> city = new HashSet<>(cities);
			while (cities-- > 0)
				city.add(scan.next());
			System.out.println(city.size());
		}
		scan.close();
	}
}
