import java.text.DecimalFormat;
import java.util.Scanner;
import java.util.TreeMap;

public class notamused {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int count = 1;
		while (scan.hasNext() && scan.next().equals("OPEN")) {
			TreeMap<String, Integer> log = new TreeMap<>();
			String parkStatus;
			while (!(parkStatus = scan.next()).equals("CLOSE")) {
				String customer = scan.next();
				int minute = scan.nextInt();
				int minute_m;
				if (parkStatus.equals("ENTER") && !log.containsKey(customer))
					minute_m = 0;
				else
					minute_m = log.get(customer);
				log.put(customer, minute - minute_m);
			}
			System.out.println("Day " + count++);
			DecimalFormat df = new DecimalFormat("0.00");
			for (String name : log.keySet())
				System.out.println(name + " $" + df.format(log.get(name) * 0.1));
		}
		scan.close();
	}
}
