import java.util.Scanner;

public class simonsays {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		scan.nextLine();
		while (N-- > 0) {
			String command = scan.nextLine();
			if (command.startsWith("Simon says "))
                System.out.println(command.substring(11));
		}
		scan.close();
	}
}
