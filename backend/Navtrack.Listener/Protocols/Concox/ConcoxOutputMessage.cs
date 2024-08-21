using Navtrack.Listener.Helpers;
using Navtrack.Listener.Helpers.Crc;
using static System.String;

namespace Navtrack.Listener.Protocols.Concox;

public class ConcoxOutputMessage(ProtocolNumber number, string[] serialNumber)
{
    private const string PacketHeaderHex = "7878";
    private const string PacketEndHex = "0D0A";

    public string PacketBody => $"{PacketLength:X2}{(int) number:X2}{Join(Empty, serialNumber)}";

    public string PacketFull => $"{PacketHeaderHex}{PacketBody}{Checksum}{PacketEndHex}";

    // 1 (protocol number) + 2 (serial number) + 2 (checksum)
    public static int PacketLength => 1 + 2 + 2;

    public string Checksum =>
        Crc.ComputeHash(HexUtil.ConvertHexStringToByteArray(PacketBody), CrcAlgorithm.Crc16X25);
}