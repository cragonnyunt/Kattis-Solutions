import java.util.HashSet;
import java.util.Scanner;

public class securedoors {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		HashSet<String> room = new HashSet<>();
		int n = scan.nextInt();
		while (n-- > 0) {
			switch (scan.next()) {
			case "entry":
				String name1 = scan.next();
				System.out.print(name1 + " entered");
				if (!room.add(name1))
					System.out.print(" (ANOMALY)");
				System.out.println();
				break;
			case "exit":
				String name2 = scan.next();
				System.out.print(name2 + " exited");
				if (!room.remove(name2))
					System.out.print(" (ANOMALY)");
				System.out.println();
				break;
			}
		}
		scan.close();
	}
}
