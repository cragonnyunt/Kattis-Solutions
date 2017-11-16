import java.util.ArrayList;
import java.util.Scanner;

public class symmetricorder {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n, count = 1;
		while ((n = scan.nextInt()) != 0) {
			ArrayList<String> names = new ArrayList<>(n);
			while (n-- > 0)
				names.add(scan.next());
			System.out.printf("SET %d%n", count++);
			for (int i = 0; i <= names.size() - 1; i++) {
				System.out.println(names.get(i));
				names.remove(i);
			}
			for (int i = names.size() - 1; i >= 0; i--)
				System.out.println(names.get(i));
		}
		scan.close();
	}
}
