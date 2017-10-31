import java.util.Scanner;

public class textencryption {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N;
		while ((N = scan.nextInt()) != 0) {
			scan.nextLine();
			String message = scan.nextLine().replace(" ", "").toUpperCase();
			char[] chipertext = new char[message.length()];
			int message_index = 0;
			int chiper_index = 0;
			while (message_index < message.length() && chiper_index < chipertext.length) {
				for (int i = chiper_index; i < chipertext.length; i += N) {
					if (message_index == message.length())
						break;
					chipertext[i] = message.charAt(message_index++);
				}
				chiper_index++;
			}
			System.out.println(new String(chipertext));
		}
		scan.close();
	}
}
