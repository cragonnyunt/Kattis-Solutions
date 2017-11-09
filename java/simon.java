import java.util.Scanner;

public class simon {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		scan.nextLine();
		while (T-- > 0) {
			String command = scan.nextLine();
			if(command.startsWith("simon says "))
				System.out.println(command.substring(11));
			else
				System.out.println();
		}
		scan.close();
	}
}
