import java.util.HashSet;
import java.util.Scanner;

public class securedoors {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		HashSet<String> room = new HashSet<>(n);
		while (n-- > 0) {
			switch (scan.next()) {
			case "entry":
				String name1 = scan.next();
				System.out.printf("%s entered", name1);
				if (!room.add(name1))
					System.out.print(" (ANOMALY)");
				System.out.println();
				break;
			case "exit":
				String name2 = scan.next();
				System.out.printf("%s exited", name2);
				if (!room.remove(name2))
					System.out.print(" (ANOMALY)");
				System.out.println();
				break;
			}
		}
		scan.close();
	}
}
