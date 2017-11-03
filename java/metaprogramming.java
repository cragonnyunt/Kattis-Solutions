import java.util.HashMap;
import java.util.Scanner;

public class metaprogramming {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		HashMap<String, Integer> meta = new HashMap<>();
		while (scan.hasNextLine()) {
			String command = scan.nextLine();
			String[] command_split = command.split(" ");
			String cmd_type = command_split[0];
			if (cmd_type.equals("define")) {
				int x = Integer.parseInt(command_split[1]);
				String var = command_split[2];
				meta.put(var, x);
			} else if (cmd_type.equals("eval")) {
				if (!meta.containsKey(command_split[1]) || !meta.containsKey(command_split[3]))
					System.out.println("undefined");
				else {
					int x = meta.get(command_split[1]);
					String y = command_split[2];
					int z = meta.get(command_split[3]);
					if (y.equals("<"))
						System.out.println(x < z);
					else if (y.equals("="))
						System.out.println(x == z);
					else if (y.equals(">"))
						System.out.println(x > z);
				}
			}
		}
		scan.close();
	}
}
