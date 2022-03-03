// based on wireshark 3.6.2

type LuaErrorString = string;
type LuaErrorNumber = number;
type uint = number;
type int = number;
type guint = number;
type gint = number;
type guint32 = number;
type gint32 = number;
type guint16 = number;
type gint16 = number;
type guint8 = number;
type gint8 = number;
type time_t = number;
type double = number;
type float = number;
type bitfield = guint32 | UInt64;
type char = number;
type Timestamp = number;
type Action = () => void;


type GetLenFunction = (this: void, tvb: Tvb, pinfo: Pinfo, offset: int) => int;
type HeuristicDissectorFunction = (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem) => boolean;
type DissectorFunction = (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem) => int;

// enum port_type{
//   PT_NONE,            /* no port number */
//   PT_SCTP,            /* SCTP */
//   PT_TCP,             /* TCP */
//   PT_UDP,             /* UDP */
//   PT_DCCP,            /* DCCP */
//   PT_IPX,             /* IPX sockets */
//   PT_DDP,             /* DDP AppleTalk connection */
//   PT_IDP,             /* XNS IDP sockets */
//   PT_USB,             /* USB endpoint 0xffff means the host */
//   PT_I2C,
//   PT_IBQP,            /* Infiniband QP number */
//   PT_BLUETOOTH,
//   PT_IWARP_MPA        /* iWarp MPA */
// }
type port_type = int;

// #region init.lua
// $ ./make-init-lua.pl ../../ template-init.lua > init.lua

// table as enum

declare enum wtap_encaps {
  PER_PACKET,
  UNKNOWN,
  ETHERNET,
  TOKEN_RING,
  SLIP,
  PPP,
  FDDI,
  FDDI_BITSWAPPED,
  RAW_IP,
  ARCNET,
  ARCNET_LINUX,
  ATM_RFC1483,
  LINUX_ATM_CLIP,
  LAPB,
  ATM_PDUS,
  ATM_PDUS_UNTRUNCATED,
  NULL,
  ASCEND,
  ISDN,
  IP_OVER_FC,
  PPP_WITH_PHDR,
  IEEE_802_11,
  IEEE_802_11_PRISM,
  IEEE_802_11_WITH_RADIO,
  IEEE_802_11_RADIOTAP,
  IEEE_802_11_AVS,
  SLL,
  FRELAY,
  FRELAY_WITH_PHDR,
  CHDLC,
  CISCO_IOS,
  LOCALTALK,
  OLD_PFLOG,
  HHDLC,
  DOCSIS,
  COSINE,
  WFLEET_HDLC,
  SDLC,
  TZSP,
  ENC,
  PFLOG,
  CHDLC_WITH_PHDR,
  BLUETOOTH_H4,
  MTP2,
  MTP3,
  IRDA,
  USER0,
  USER1,
  USER2,
  USER3,
  USER4,
  USER5,
  USER6,
  USER7,
  USER8,
  USER9,
  USER10,
  USER11,
  USER12,
  USER13,
  USER14,
  USER15,
  SYMANTEC,
  APPLE_IP_OVER_IEEE1394,
  BACNET_MS_TP,
  NETTL_RAW_ICMP,
  NETTL_RAW_ICMPV6,
  GPRS_LLC,
  JUNIPER_ATM1,
  JUNIPER_ATM2,
  REDBACK,
  NETTL_RAW_IP,
  NETTL_ETHERNET,
  NETTL_TOKEN_RING,
  NETTL_FDDI,
  NETTL_UNKNOWN,
  MTP2_WITH_PHDR,
  JUNIPER_PPPOE,
  GCOM_TIE1,
  GCOM_SERIAL,
  NETTL_X25,
  K12,
  JUNIPER_MLPPP,
  JUNIPER_MLFR,
  JUNIPER_ETHER,
  JUNIPER_PPP,
  JUNIPER_FRELAY,
  JUNIPER_CHDLC,
  JUNIPER_GGSN,
  LINUX_LAPD,
  CATAPULT_DCT2000,
  BER,
  JUNIPER_VP,
  USB_FREEBSD,
  IEEE802_16_MAC_CPS,
  NETTL_RAW_TELNET,
  USB_LINUX,
  MPEG,
  PPI,
  ERF,
  BLUETOOTH_H4_WITH_PHDR,
  SITA,
  SCCP,
  BLUETOOTH_HCI,
  IPMB_KONTRON,
  IEEE802_15_4,
  X2E_XORAYA,
  FLEXRAY,
  LIN,
  MOST,
  CAN20B,
  LAYER1_EVENT,
  X2E_SERIAL,
  I2C_LINUX,
  IEEE802_15_4_NONASK_PHY,
  TNEF,
  USB_LINUX_MMAPPED,
  GSM_UM,
  DPNSS,
  PACKETLOGGER,
  NSTRACE_1_0,
  NSTRACE_2_0,
  FIBRE_CHANNEL_FC2,
  FIBRE_CHANNEL_FC2_WITH_FRAME_DELIMS,
  JPEG_JFIF,
  IPNET,
  SOCKETCAN,
  IEEE_802_11_NETMON,
  IEEE802_15_4_NOFCS,
  RAW_IPFIX,
  RAW_IP4,
  RAW_IP6,
  LAPD,
  DVBCI,
  MUX27010,
  MIME,
  NETANALYZER,
  NETANALYZER_TRANSPARENT,
  IP_OVER_IB_SNOOP,
  MPEG_2_TS,
  PPP_ETHER,
  NFC_LLCP,
  NFLOG,
  V5_EF,
  BACNET_MS_TP_WITH_PHDR,
  IXVERIWAVE,
  SDH,
  DBUS,
  AX25_KISS,
  AX25,
  SCTP,
  INFINIBAND,
  JUNIPER_SVCS,
  USBPCAP,
  RTAC_SERIAL,
  BLUETOOTH_LE_LL,
  WIRESHARK_UPPER_PDU,
  STANAG_4607,
  STANAG_5066_D_PDU,
  NETLINK,
  BLUETOOTH_LINUX_MONITOR,
  BLUETOOTH_BREDR_BB,
  BLUETOOTH_LE_LL_WITH_PHDR,
  NSTRACE_3_0,
  LOGCAT,
  LOGCAT_BRIEF,
  LOGCAT_PROCESS,
  LOGCAT_TAG,
  LOGCAT_THREAD,
  LOGCAT_TIME,
  LOGCAT_THREADTIME,
  LOGCAT_LONG,
  PKTAP,
  EPON,
  IPMI_TRACE,
  LOOP,
  JSON,
  NSTRACE_3_5,
  ISO14443,
  GFP_T,
  GFP_F,
  IP_OVER_IB_PCAP,
  JUNIPER_VN,
  USB_DARWIN,
  LORATAP,
  "3MB_ETHERNET",
  VSOCK,
  NORDIC_BLE,
  NETMON_NET_NETEVENT,
  NETMON_HEADER,
  NETMON_NET_FILTER,
  NETMON_NETWORK_INFO_EX,
  MA_WFP_CAPTURE_V4,
  MA_WFP_CAPTURE_V6,
  MA_WFP_CAPTURE_2V4,
  MA_WFP_CAPTURE_2V6,
  MA_WFP_CAPTURE_AUTH_V4,
  MA_WFP_CAPTURE_AUTH_V6,
  JUNIPER_ST,
  ETHERNET_MPACKET,
  DOCSIS31_XRA31,
  DPAUXMON,
  RUBY_MARSHAL,
  RFC7468,
  SYSTEMD_JOURNAL,
  EBHSCR,
  VPP,
  IEEE802_15_4_TAP,
  LOG_3GPP,
  USB_2_0,
  MP4,
  SLL2,
  ZWAVE_SERIAL,
  ETW,
  ERI_ENB_LOG,
}

// from Wireshark Evalute Lua
// local wtap_filetypes=get_wtap_filetypes()
// for k,v in pairs(wtap_filetypes) do
//  print(k..",")
// end
declare enum wtap_filetypes {
  EYESDN,
  HCIDUMP,
  LOGCAT_TIME,
  VISUAL_NETWORKS,
  TSPREC_NSEC,
  UNKNOWN,
  TNEF,
  PCAP_SS990915,
  PCAP,
  "5VIEWS",
  MPEG_2_TS,
  CAMINS,
  K12TEXT,
  LOGCAT_THREAD,
  CSIDS,
  NGSNIFFER_COMPRESSED,
  NETSCALER_3_5,
  DBS_ETHERWATCH,
  IPTRACE_2_0,
  TSPREC_USEC,
  NETSCALER_1_0,
  PCAP_NOKIA,
  PACKETLOGGER,
  LOGCAT,
  JPEG_JFIF,
  SNOOP,
  BER,
  PCAP_SS990417,
  PCAP_SS991029,
  NETXRAY_1_0,
  PCAP_NSEC,
  ERF,
  COSINE,
  BTSNOOP,
  COLASOFT_CAPSA,
  COLASOFT_PACKET_BUILDER,
  AETHRA,
  LANALYZER,
  MIME,
  NETXRAY_2_00x,
  NGSNIFFER_UNCOMPRESSED,
  RFC7468,
  NETTRACE_3GPP_32_423,
  PCAPNG,
  MPEG,
  NETMON_1_x,
  LOGCAT_TAG,
  CATAPULT_DCT2000,
  VWR_80211,
  VMS,
  PCAP_AIX,
  K12,
  TOSHIBA,
  SYSTEMD_JOURNAL,
  STANAG_4607,
  TSPREC_CSEC,
  PEEKCLASSIC_V56,
  RUBY_MARSHAL,
  RADCOM,
  LOGCAT_THREADTIME,
  PEEKTAGGED,
  ASCEND,
  PEEKCLASSIC_V7,
  SHOMITI,
  NETWORK_INSTRUMENTS,
  NETSCALER_3_0,
  DCT3TRACE,
  NETXRAY_1_1,
  NETXRAY_OLD,
  NETTL,
  COMMVIEW,
  NETSCREEN,
  NETMON_2_x,
  MPLOG,
  ISERIES,
  ISERIES_UNICODE,
  LOGCAT_LONG,
  PPPDUMP,
  LOGCAT_PROCESS,
  LOGCAT_BRIEF,
  JSON,
  LOG_3GPP,
  TSPREC_SEC,
  TSPREC_DSEC,
  MP4,
  IPTRACE_1_0,
  DPA400,
  IPFIX,
  I4BTRACE,
  NETSCALER_2_0,
  VWR_ETH,
  TSPREC_MSEC,
  DAINTREE_SNA,
  BLF,
}

declare enum wtap_tsprecs {
  SEC,
  DSEC,
  CSEC,
  MSEC,
  USEC,
  NSEC,
}
declare enum wtap_comments {
  PER_SECTION,
  PER_INTERFACE,
  PER_PACKET,
}

declare enum ftypes {
  NONE,
  PROTOCOL,
  BOOLEAN,
  CHAR,
  UINT8,
  UINT16,
  UINT24,
  UINT32,
  UINT40,
  UINT48,
  UINT56,
  UINT64,
  INT8,
  INT16,
  INT24,
  INT32,
  INT40,
  INT48,
  INT56,
  INT64,
  IEEE_11073_SFLOAT,
  IEEE_11073_FLOAT,
  FLOAT,
  DOUBLE,
  ABSOLUTE_TIME,
  RELATIVE_TIME,
  STRING,
  STRINGZ,
  UINT_STRING,
  ETHER,
  BYTES,
  UINT_BYTES,
  IPv4,
  IPv6,
  IPXNET,
  FRAMENUM,
  GUID,
  OID,
  EUI64,
  AX25,
  VINES,
  REL_OID,
  SYSTEM_ID,
  STRINGZPAD,
  FCWWN,
  STRINGZTRUNC,
}

declare enum frametype {
  NONE,
  REQUEST,
  RESPONSE,
  ACK,
  DUP_ACK,
  RETRANS_PREV,
  RETRANS_NEXT,
}

declare enum wtap_rec_types {
  PACKET,
  FT_SPECIFIC_EVENT,
  FT_SPECIFIC_REPORT,
  SYSCALL,
  SYSTEMD_JOURNAL_EXPORT,
  CUSTOM_BLOCK,
}

declare enum wtap_presence_flags {
  TS,
  CAP_LEN,
  INTERFACE_ID,
}

declare enum base {
  NONE,
  DEC,
  HEX,
  OCT,
  DEC_HEX,
  HEX_DEC,
  CUSTOM,
  ASCII,
  UNICODE,
  DOT,
  DASH,
  COLON,
  SPACE,
  NETMASK,
  PT_UDP,
  PT_TCP,
  PT_DCCP,
  PT_SCTP,
  OUI,
  RANGE_STRING,
  UNIT_STRING,
  LOCAL,
  UTC,
  DOY_UTC,
  NTP_UTC,
}

declare const ENC_BIG_ENDIAN: int;
declare const ENC_LITTLE_ENDIAN: int;
declare const ENC_NA: int;
declare const ENC_CHARENCODING_MASK: int;
declare const ENC_ASCII: int;
declare const ENC_ISO_646_IRV: int;
declare const ENC_UTF_8: int;
declare const ENC_UTF_16: int;
declare const ENC_UCS_2: int;
declare const ENC_UCS_4: int;
declare const ENC_ISO_8859_1: int;
declare const ENC_ISO_8859_2: int;
declare const ENC_ISO_8859_3: int;
declare const ENC_ISO_8859_4: int;
declare const ENC_ISO_8859_5: int;
declare const ENC_ISO_8859_6: int;
declare const ENC_ISO_8859_7: int;
declare const ENC_ISO_8859_8: int;
declare const ENC_ISO_8859_9: int;
declare const ENC_ISO_8859_10: int;
declare const ENC_ISO_8859_11: int;
declare const ENC_ISO_8859_13: int;
declare const ENC_ISO_8859_14: int;
declare const ENC_ISO_8859_15: int;
declare const ENC_ISO_8859_16: int;
declare const ENC_WINDOWS_1250: int;
declare const ENC_3GPP_TS_23_038_7BITS_PACKED: int;
declare const ENC_3GPP_TS_23_038_7BITS: int;
declare const ENC_EBCDIC: int;
declare const ENC_MAC_ROMAN: int;
declare const ENC_CP437: int;
declare const ENC_ASCII_7BITS: int;
declare const ENC_T61: int;
declare const ENC_EBCDIC_CP037: int;
declare const ENC_WINDOWS_1252: int;
declare const ENC_WINDOWS_1251: int;
declare const ENC_CP855: int;
declare const ENC_CP866: int;
declare const ENC_ISO_646_BASIC: int;
declare const ENC_BCD_DIGITS_0_9: int;
declare const ENC_KEYPAD_ABC_TBCD: int;
declare const ENC_KEYPAD_BC_TBCD: int;
declare const ENC_3GPP_TS_23_038_7BITS_UNPACKED: int;
declare const ENC_ETSI_TS_102_221_ANNEX_A: int;
declare const ENC_GB18030: int;
declare const ENC_EUC_KR: int;
declare const ENC_APN_STR: int;
declare const ENC_ZIGBEE: int;
declare const ENC_STR_NUM: int;
declare const ENC_STR_HEX: int;
declare const ENC_STRING: int;
declare const ENC_STR_MASK: int;
declare const ENC_NUM_PREF: int;
declare const ENC_SEP_NONE: int;
declare const ENC_SEP_COLON: int;
declare const ENC_SEP_DASH: int;
declare const ENC_SEP_DOT: int;
declare const ENC_SEP_SPACE: int;
declare const ENC_SEP_MASK: int;
declare const ENC_BCD_ODD_NUM_DIG: int;
declare const ENC_BCD_SKIP_FIRST: int;
declare const ENC_TIME_SECS_NSECS: int;
declare const ENC_TIME_TIMESPEC: int;
declare const ENC_TIME_NTP: int;
declare const ENC_TIME_TOD: int;
declare const ENC_TIME_RTPS: int;
declare const ENC_TIME_NTP_BASE_ZERO: int;
declare const ENC_TIME_SECS_USECS: int;
declare const ENC_TIME_TIMEVAL: int;
declare const ENC_TIME_SECS: int;
declare const ENC_TIME_MSECS: int;
declare const ENC_TIME_SECS_NTP: int;
declare const ENC_TIME_RFC_3971: int;
declare const ENC_TIME_MSEC_NTP: int;
declare const ENC_TIME_MIP6: int;
declare const ENC_TIME_CLASSIC_MAC_OS_SECS: int;
declare const ENC_TIME_NSECS: int;
declare const ENC_ISO_8601_DATE: int;
declare const ENC_ISO_8601_TIME: int;
declare const ENC_ISO_8601_DATE_TIME: int;
declare const ENC_RFC_822: int;
declare const ENC_RFC_1123: int;
declare const ENC_STR_TIME_MASK: int;
declare const ENC_VARINT_PROTOBUF: int;
declare const ENC_VARINT_QUIC: int;
declare const ENC_VARINT_ZIGZAG: int;
type Encoding = int;


declare const PI_SEVERITY_MASK: int;
declare const PI_COMMENT: int;
declare const PI_CHAT: int;
declare const PI_NOTE: int;
declare const PI_WARN: int;
declare const PI_ERROR: int;
declare const PI_GROUP_MASK: int;
declare const PI_CHECKSUM: int;
declare const PI_SEQUENCE: int;
declare const PI_RESPONSE_CODE: int;
declare const PI_REQUEST_CODE: int;
declare const PI_UNDECODED: int;
declare const PI_REASSEMBLE: int;
declare const PI_MALFORMED: int;
declare const PI_DEBUG: int;
declare const PI_PROTOCOL: int;
declare const PI_SECURITY: int;
declare const PI_COMMENTS_GROUP: int;
declare const PI_DECRYPTION: int;
declare const PI_ASSUMPTION: int;
declare const PI_DEPRECATED: int;



declare namespace expert {
  enum group {
    CHECKSUM,
    SEQUENCE,
    RESPONSE_CODE,
    REQUEST_CODE,
    UNDECODED,
    REASSEMBLE,
    MALFORMED,
    DEBUG,
    PROTOCOL,
    SECURITY,
    COMMENTS_GROUP,
    DECRYPTION,
    ASSUMPTION,
    DEPRECATED,
  }
  enum severity {
    COMMENT,
    CHAT,
    NOTE,
    WARN,
    ERROR,
  }
}

declare const MENU_ANALYZE_UNSORTED: int;
declare const MENU_ANALYZE_CONVERSATION: int;
declare const MENU_STAT_UNSORTED: int;
declare const MENU_STAT_GENERIC: int;
declare const MENU_STAT_CONVERSATION: int;
declare const MENU_STAT_ENDPOINT: int;
declare const MENU_STAT_RESPONSE: int;
declare const MENU_STAT_RSERPOOL: int;
declare const MENU_STAT_TELEPHONY: int;
declare const MENU_STAT_TELEPHONY_ANSI: int;
declare const MENU_STAT_TELEPHONY_GSM: int;
declare const MENU_STAT_TELEPHONY_LTE: int;
declare const MENU_STAT_TELEPHONY_MTP3: int;
declare const MENU_STAT_TELEPHONY_SCTP: int;
declare const MENU_TOOLS_UNSORTED: int;


declare const P2P_DIR_UNKNOWN: int;
declare const P2P_DIR_SENT: int;
declare const P2P_DIR_RECV: int;
type p2p_dir = int;

// #endregion

// see https://www.wireshark.org/docs/wsdg_html_chunked/wsluarm_modules.html
// and source code wireshark/epan/wslua/wslua_*.c

// #region 11.1. Saving Capture Files
// https://www.wireshark.org/docs/wsdg_html_chunked/wsluarm_modules.html
declare interface Dumper {
  close(): void;
  flush(): void;
  dump(timestamp: Timestamp, pseudoheader: PseudoHeader, bytearray: ByteArray): void;
  new_for_current(filetype?: wtap_filetypes): Dumper;
  dump_current(): void;

}
interface DumperConstructor {
  new: (this: void, filename: string, filetype?: wtap_filetypes, encap?: wtap_encaps) => Dumper;
}

declare const Dumper: DumperConstructor;

declare interface PseudoHeader {

}
interface PseudoHeaderConstructor {
  none: (this: void) => PseudoHeader;
  eth: (this: void, fcslen?: guint) => PseudoHeader;
  atm: (this: void, aal?: guint8, vpi?: guint16, vci?: guint16, channel?: guint16, cells?: guint16, aal5u2u?: guint16, aal5len?: guint16) => PseudoHeader;
  mtp2: (this: void, sent?: guint8, annexa?: guint8, linknum?: guint16) => PseudoHeader;
}
declare const PseudoHeader: PseudoHeaderConstructor;

// #endregion


// #region 11.2. Obtaining Dissection Data
// https://www.wireshark.org/docs/wsdg_html_chunked/lua_module_Field.html
declare interface Field {
  (): LuaMultiReturn<[...Array<FieldInfo>]>;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  readonly name: string;
  readonly display: string | null;
  readonly type: ftypes | null;
}
interface FieldConstructor {
  new: (this: void, fieldname: string) => Field;
  list: (this: void) => LuaTable<number, string>;
}
declare const Field: FieldConstructor;

type FieldInfoValueType = boolean | uint | int | double | Int64 | UInt64 | Address | NSTime | string | ByteArray;
declare interface FieldInfo {
  __len: LuaLengthMethod<gint>;
  __unm: LuaNegationMethod<gint>;
  (): FieldInfoValueType;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  // __eq(rhs:FieldInfo):boolean;
  // __le(rhs:FieldInfo):boolean;
  // __lt(rhs:FieldInfo):boolean;
  readonly len: gint;
  readonly offset: gint;
  readonly value: FieldInfoValueType;
  readonly label: string;
  readonly display: string;
  readonly type: ftypes;
  readonly source: Tvb | null;
  readonly range: TvbRange | null;
  readonly generated: boolean;
  readonly hidden: boolean;
  readonly is_url: boolean;
  readonly little_endian: boolean;
  readonly big_endian: boolean;
  readonly name: string;
}
declare function all_field_infos(): any;
// #endregion

// #region 11.3. GUI Support
// https://www.wireshark.org/docs/wsdg_html_chunked/lua_module_Gui.html
declare interface ProgDlg {
  update(progress: double, task?: string): void;
  stopped(): boolean;
  close(): void;
}
interface ProgDlgConstructor {
  new: (this: void, title?: string, task?: string) => ProgDlg;

}
declare const ProgDlg: ProgDlgConstructor;

declare interface TextWindow {
  set_atclose(action: Action): void;
  set(text: string): TextWindow;
  append(text: string): TextWindow;
  prepend(text: string): TextWindow;
  clear(): TextWindow;
  get_text(): string;
  close(): void;
  set_editable(editable?: boolean): TextWindow;
  add_button(label: string, function_: Action): TextWindow;
}
interface TextWindowConstructor {
  new: (this: void, title?: string) => TextWindow;

}
declare const TextWindow: TextWindowConstructor;

declare function gui_enabled(): boolean;
declare function register_menu(name: string, action: Action, group?: guint): void;
declare function new_dialog(title: string, action: (...params: Array<any>) => void, ...params: Array<any>): void;
declare function retap_packets(): void;
declare function copy_to_clipboard(text: string): void
declare function open_capture_file(filename: string, filter: string): boolean;
declare function get_filter(): string;
declare function set_filter(filter: string): void;
declare function get_color_filter_slot(row: guint8): string;
declare function set_color_filter_slot(row: guint8, text: string): void;
declare function apply_filter(): void;
/**
 * @deprecated Use reload_packets() instead.
 */
declare function reload(): void;
declare function reload_packets(): void;
declare function redissect_packets(): void;
declare function reload_lua_plugins(): void;
declare function browser_open_url(url: string): void;
declare function browser_open_data_file(filename: string): void;

// #endregion


// #region 11.4. Post-Dissection Packet Analysis
// https://www.wireshark.org/docs/wsdg_html_chunked/lua_module_Listener.html
declare interface Listener {
  remove(): void;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  // Mode: Assign only.
  packet: (pinfo: Pinfo, tvb: Tvb, tapinfo: LuaTable | null) => void;
  // Mode: Assign only.
  draw: () => void;
  // Mode: Assign only.
  reset: () => void;

}
interface ListenerConstructor {
  new: (this: void, tap?: string, filter?: string, allfields?: boolean) => Listener;
  list: (this: void) => LuaTable<number, string>;

}
// #endregion

// #region 11.5. Obtaining Packet Information
// https://www.wireshark.org/docs/wsdg_html_chunked/lua_module_Pinfo.html

declare interface Address {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  // __eq(rhs:Address):boolean;
  // __le(rhs:Address):boolean;
  // __lt(rhs:Address):boolean;
}

interface AddressConstructor {
  ip: (this: void, hostname: string) => Address;
  ipv6: (this: void, hostname: string) => Address;
  ether: (this: void, eth: string) => Address;
}
declare const Address: AddressConstructor;

declare interface Column {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  clear(): void;
  set(text: string): void;
  append(text: string): void;
  prepend(text: string): void;
  fence(): void;
  clear_fence(): void;
}

// set string, get Column.
declare interface Columns extends LuaTable<string, Column | string> {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  // why string?
  // __newindex(column:string,text:string):void;
  // __index(column:string):Column;
}
declare interface NSTime {
  (seconds?: time_t, nseconds?: int): NSTime;
  tonumber(): number;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  __add: LuaAdditionMethod<NSTime, NSTime>;
  __sub: LuaSubtractionMethod<NSTime, NSTime>;
  __unm: LuaNegationMethod<NSTime>;
  // __eq(rhs:NSTime):boolean;
  // __le(rhs:NSTime):boolean;
  // __lt(rhs:NSTime):boolean;
  secs: time_t;
  nsecs: int;
}
interface NSTimeConstructor {
  new: (this: void, seconds?: time_t, nseconds?: int) => NSTime;
}
declare const NSTime: NSTimeConstructor;




declare interface Pinfo {
  readonly visited: boolean;
  readonly number: guint32;
  readonly len: guint32;
  readonly caplen: guint32;
  readonly abs_ts: double;
  readonly rel_ts: double;
  readonly delta_ts: double;
  readonly delta_dis_ts: double;
  readonly curr_proto: string;
  can_desegment: guint16;
  desegment_len: guint32;
  desegment_offset: int;
  readonly fragmented: boolean;
  readonly in_error_pkt: boolean;
  readonly match_uint: guint32;
  readonly match_string: string;
  port_type: port_type;
  src_port: guint32;
  dst_port: guint32;
  dl_src: Address;
  dl_dst: Address;
  net_src: Address;
  net_dst: Address;
  src: Address;
  dst: Address;
  p2p_dir: p2p_dir;
  readonly match: guint32 | string;
  readonly columns: Columns;
  readonly cols: Columns;
  readonly private: PrivateTable;
  hi: Address;
  readonly lo: Address;
  //Mode: Assign only.
  conversation: Proto;


}
declare interface PrivateTable {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
}

// #endregion

// #region 11.6. Functions For New Protocols And Dissectors



declare interface Dissector {
  call(tvb: Tvb, pinfo: Pinfo, tree: TreeItem): int;
  (tvb: Tvb, pinfo: Pinfo, tree: TreeItem): int;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;

}
interface DissectorConstructor {
  get: (this: void, name: string) => Dissector;
  list: (this: void) => LuaTable<number, string>;
}
declare const Dissector: DissectorConstructor;

type RangeAsString = string;
type PatternType = string | int | RangeAsString;
declare interface DissectorTable {
  add(pattern: PatternType, dissector: Dissector): void;
  set(pattern: PatternType, dissector: Dissector): void;
  remove(pattern: PatternType, dissector: Dissector): void;
  remove_all(dissector: Dissector): void;
  try(pattern: PatternType, tvb: Tvb, pinfo: Pinfo, tree: TreeItem): int;
  get_dissector(pattern: PatternType): Dissector | null;
  add_for_decode_as(proto: Proto): void;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
}

interface DissectorTableConstructor {
  new: (this: void, tablename: string, uiname?: string, type?: ftypes, base?: base, proto?: Proto) => DissectorTable;
  list: (this: void) => LuaTable<number, string>;
  heuristic_list: (this: void) => LuaTable<number, string>;
  try_heuristics: (this: void, listname: string, tvb: Tvb, pinfo: Pinfo, tree: TreeItem) => boolean;
  get: (this: void, tablename: string) => DissectorTable | null;
}
declare const DissectorTable: DissectorTableConstructor;

type PrefValueType = boolean | guint32 | string;
declare interface Pref {

}
interface PrefConstructor {
  bool: (this: void, label: string, default_: boolean, descr: string) => Pref;
  uint: (this: void, label: string, default_: guint32, descr: string) => Pref;
  string: (this: void, label: string, default_: string, descr: string) => Pref;
  enum: (this: void, label: string, default_: guint32, descr: string, enum_: LuaTable<number, LuaTable<number, any>>, radio: boolean) => Pref;
  range: (this: void, label: string, default_: string, descr: string, max: guint32) => Pref;
  statictext: (this: void, label: string, descr: string) => Pref;

}
declare const Pref: PrefConstructor;
declare interface Prefs extends LuaTable<string, Pref> {
  // __newindex(name:string,pref:Pref):void;
  // __index(name:string):Pref;
}

declare interface Proto {
  (name: string, desc: string): Proto;
  register_heuristic(listname: string, func: HeuristicDissectorFunction): void;
  dissector: DissectorFunction;
  readonly prefs: Prefs;
  // Mode: Assign only.
  prefs_changed: Action;
  // Mode: Assign only.
  init: Action;
  readonly name: string;
  readonly description: string;
  fields: LuaTable<number, ProtoField>;
  experts: ProtoExpert;
}

interface ProtoConstructor {
  new: (this: void, name: string, desc: string) => Proto;
}
declare const Proto: ProtoConstructor;

declare interface ProtoExpert {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
}
interface ProtoExpertConstructor {
  new: (this: void, abbr: string, text: string, group: expert.group, severity: expert.severity) => ProtoExpert;
}
declare const ProtoExpert: ProtoExpertConstructor;

declare interface ProtoField {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
}

// {min, max, "string"}
// or
// {"unit name"}
type ValuestringType = LuaTable<number, any>;
interface ProtoFieldConstructor {
  new: (this: void, name: string, abbr: string, type: ftypes, valuestring?: ValuestringType, base?: base, mask?: guint32, descr?: string) => ProtoField;
  char: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  uint8: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  uint16: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  uint24: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  uint32: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  uint64: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  int8: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  int16: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  int24: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  int32: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  int64: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  framenum: (this: void, abbr: string, name?: string, base?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  bool: (this: void, abbr: string, name?: string, display?: base, valuestring?: ValuestringType, mask?: guint32, desc?: string) => ProtoField;
  absolute_time: (this: void, abbr: string, name?: string, base?: base, desc?: string) => ProtoField;
  relative_time: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  float: (this: void, abbr: string, name?: string, valuestring?: ValuestringType, desc?: string) => ProtoField;
  double: (this: void, abbr: string, name?: string, valuestring?: ValuestringType, desc?: string) => ProtoField;
  string: (this: void, abbr: string, name?: string, display?: base, desc?: string) => ProtoField;
  stringz: (this: void, abbr: string, name?: string, display?: base, desc?: string) => ProtoField;
  bytes: (this: void, abbr: string, name?: string, display?: base, desc?: string) => ProtoField;
  ubytes: (this: void, abbr: string, name?: string, display?: base, desc?: string) => ProtoField;
  none: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  ipv4: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  ipv6: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  ether: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  guid: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  oid: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  protocol: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  rel_oid: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  systemid: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
  eui64: (this: void, abbr: string, name?: string, desc?: string) => ProtoField;
}
declare const ProtoField: ProtoFieldConstructor;


declare function register_postdissector(proto: Proto, allfields?: boolean): void;
declare function dissect_tcp_pdus(tvb: Tvb, tree: TreeItem, min_header_size: guint, get_len_func: GetLenFunction, dissect_func: DissectorFunction, desegment?: boolean): void;
// #endregion

// #region 11.7. Adding Information To The Dissection Tree
declare interface TreeItem {
  add_packet_field(protofield: ProtoField, tvbrange: TvbRange, encoding: Encoding, ...labels: Array<string>): LuaMultiReturn<[TreeItem | null, FieldInfoValueType | null, int | null]>;
  // overload for tvbrange?:TvbRange
  add_packet_field(protofield: ProtoField, encoding: Encoding, ...labels: Array<string>): LuaMultiReturn<[TreeItem | null, FieldInfoValueType | null, int | null]>;
  add(protofield?: ProtoField, tvbrange?: TvbRange, value?: FieldInfoValueType, ...labels: Array<string>): TreeItem;
  add_le(protofield?: ProtoField, tvbrange?: TvbRange, value?: FieldInfoValueType, ...labels: Array<string>): TreeItem;
  set_text(text: string): TreeItem;
  append_text(text: string): TreeItem;
  prepend_text(text: string): TreeItem;
  add_expert_info(group?: expert.group, severity?: expert.severity, text?: string): TreeItem;
  add_proto_expert_info(expert: ProtoExpert, text?: string): TreeItem;
  add_tvb_expert_info(expert: ProtoExpert, tvb: Tvb | TvbRange, text?: string): TreeItem;
  set_generated(bool?: boolean): TreeItem;
  set_hidden(bool?: boolean): TreeItem;
  set_len(len: gint): TreeItem;
  referenced(protofield: ProtoField | Dissector): boolean;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  text: string;
  readonly visible: boolean;
  generated: boolean;
  hidden: boolean;
  len: gint;
}
// #endregion

// #region 11.8. Functions For Handling Packet Data
declare interface ByteArray {
  __concat: LuaConcatMethod<ByteArray, ByteArray>;
  // __eq(rhs:ByteArray):boolean;
  prepend(prepended: ByteArray): void;
  append(appended: ByteArray): void;
  set_size(size: int): void;
  set_index(index: number, value: guint8): void;
  get_index(index: number): guint8;
  len(): int;
  subset(offset: int, length: int): ByteArray;
  base64_decode(): ByteArray;
  raw(offset?: int, length?: int): string;
  tohex(lowercase?: boolean, separator?: string): string;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  tvb(name: string): Tvb;
}
interface ByteArrayConstructor {
  new: (this: void, hexbytes?: string, separator?: string | boolean) => ByteArray;
}
declare const ByteArray: ByteArrayConstructor;

declare interface Tvb {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  reported_len(): guint;
  captured_len(): guint;
  len(): guint;
  reported_length_remaining(): gint;
  bytes(offset?: int, length?: int): ByteArray;
  offset(): gint;
  (offset?: int, length?: int): TvbRange;
  range(offset?: int, length?: int): TvbRange;
  raw(offset?: int, length?: int): string;
  // __eq(rhs:Tvb):boolean;
}
declare interface TvbRange {
  tvb(): Tvb;
  uint(): guint32;
  le_uint(): guint32;
  UInt64(): UInt64;
  le_UInt64(): UInt64;
  int(): gint32;
  le_int(): gint32;
  Int64(): Int64;
  le_Int64(): Int64;
  float(): double;
  le_float(): double;
  ipv4(): Address;
  le_ipv4(): Address;
  ipv6(): Address;
  ether(): Address;
  nstime(encoding?: Encoding): NSTime;
  le_nstime(encoding?: Encoding): NSTime;
  string(encoding?: Encoding): string;
  ustring(): string;
  le_ustring(): string;
  stringz(encoding?: Encoding): string;
  strsize(encoding?: Encoding): number;
  ustringz(): [string, number];
  le_ustringz(): [string, number];
  bytes(encoding?: Encoding): ByteArray;
  bitfield(position?: int, length?: int): bitfield;
  range(offset?: int, length?: int): TvbRange;
  uncompress(name: string): TvbRange;
  len(): int;
  offset(): int;
  raw(offset?: int, length?: int): string;
  // __eq(rhs:TvbRange):boolean;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;

}

// #endregion

// #region 11.9. Custom File Format Reading And Writing
declare interface CaptureInfo {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  encap: wtap_encaps;
  time_precision: wtap_tsprecs;
  snapshot_length: guint;
  comment: string | null;
  hardware: string | null;
  os: string | null;
  user_app: string | null;
  hosts: LuaTable<string, LuaTable<number, LuaTable<string, string>>> | null;
  private_table: LuaTable;
}
declare interface CaptureInfoConst {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  readonly type: wtap_filetypes;
  readonly snapshot_length: guint;
  readonly encap: wtap_encaps;
  comment: string | null;
  readonly hardware: string | null;
  readonly os: string | null;
  readonly user_app: string | null;
  readonly hosts: LuaTable<string, LuaTable<number, LuaTable<string, string>>> | null;
  private_table: LuaTable;
}
type FileReadParam = "*n" | "*a" | "*l" | int;
type FileWriteParam = string | number;
type LinesIteratorFunction = () => string;
declare interface File {
  read(...fileReadParams: Array<FileReadParam>): LuaMultiReturn<[...Array<string | number>]> | LuaMultiReturn<[null]>;
  // double as gint64
  seek(whence?: "set" | "cur" | "end", offset?: double): LuaMultiReturn<[double]> | LuaMultiReturn<[null, LuaErrorString]>;
  lines(): LinesIteratorFunction;
  write(...fileWriteParams: Array<FileWriteParam>): File | null;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  readonly compressed: boolean;
}
type FileReadOpenFunction = (file: File, capture: CaptureInfo) => boolean;
// double as gint64
type FileReadFunction = (file: File, capture: CaptureInfo, frame: FrameInfo) => false | double;
// double as gint64
type FileSeekReadFunction = (file: File, capture: CaptureInfo, frame: FrameInfo, offset: double) => boolean | double;
type FileReadCloseFunction = (file: File, capture: CaptureInfo) => void;
type FileSeqReadCloseFunction = (file: File, capture: CaptureInfo) => void;
type FileCanWriteEncapFunction = (encap: wtap_encaps) => boolean;
type FileWriteOpenFunction = (file: File, capture: CaptureInfoConst) => boolean;
type FileWriteFunction = (file: File, capture: CaptureInfoConst, frame: FrameInfoConst) => boolean;
type FileWriteFinishFunction = () => boolean;
declare interface FileHandler {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  // Mode: Assign only.
  read_open: FileReadOpenFunction;
  // Mode: Assign only.
  read: FileReadFunction;
  // Mode: Assign only.
  seek_read: FileSeekReadFunction;
  // Mode: Assign only.
  read_close: FileReadCloseFunction;
  // Mode: Assign only.
  seq_read_close: FileSeqReadCloseFunction;
  // Mode: Assign only.
  can_write_encap: FileCanWriteEncapFunction;
  // Mode: Assign only.
  write_open: FileWriteOpenFunction;
  // Mode: Assign only.
  write: FileWriteFunction;
  // Mode: Assign only.
  write_finish: FileWriteFinishFunction;
  readonly type: wtap_filetypes;
  extensions: string;
  writing_must_seek: boolean;
  writes_name_resolution: boolean;
  supported_comment_types: guint;

}
type TypeOfFileHandler = "r" | "w" | "rw" | "m" | "s";
interface FileHandlerConstructor {
  new: (this: void, description: string, name: string, internal_description: string, type: TypeOfFileHandler) => FileHandler | LuaErrorString;
}
declare const FileHandler: FileHandlerConstructor;
declare interface FrameInfo {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  read_data(file: File, length: guint32): LuaMultiReturn<[true]> | LuaMultiReturn<[false, LuaErrorString | null, LuaErrorNumber]>;
  comment: LuaTable<number, string>;
  time: NSTime;
  // This cannot be cleared once set.
  data: string;
  rec_type: wtap_rec_types;
  flags: wtap_presence_flags;
  captured_length: guint32;
  original_length: guint32;
  encap: wtap_encaps;
}
declare interface FrameInfoConst {
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  write_data(file: File, length?: guint32): LuaMultiReturn<[true]> | LuaMultiReturn<[false, LuaErrorString, LuaErrorNumber]>;
  readonly comment: LuaTable<number, string>;
  readonly time: NSTime;
  readonly data: string;
  readonly rec_type: wtap_rec_types;
  readonly flags: wtap_presence_flags;
  readonly captured_length: guint32;
  readonly original_length: guint32;
  readonly encap: wtap_encaps;
}

declare function register_filehandler(filehandler: FileHandler): wtap_filetypes;
declare function deregister_filehandler(filehandler: FileHandler): void;

// #endregion

// #region 11.10. Directory Handling Functions

declare interface Dir {
  personal_config_path(filename?: string): string;
  global_config_path(filename?: string): string;
  personal_plugins_path(): string;
  global_plugins_path(): string;
  // string|void ?
  (): string | null;
}
interface DirConstructor {
  make(name: string): boolean | null;
  exists(name: string): boolean | null;
  remove(name: string): boolean | null;
  remove_all(name: string): boolean | null;
  open(pathname: string, extension?: string): Dir;
}
declare const Dir: DirConstructor;
// #endregion

// #region 11.11. Wtap Functions For Handling Capture File Types
declare function wtap_file_type_subtype_name(filetype: wtap_filetypes): string | null;
declare function wtap_name_to_file_type_subtype(name: string): wtap_filetypes | null;
declare function wtap_pcap_file_type_subtype(): wtap_filetypes;
declare function wtap_pcap_nsec_file_type_subtype(): wtap_filetypes;
declare function wtap_pcapng_file_type_subtype(): wtap_filetypes;
// #endregion

// #region 11.12. Utility Functions
declare function get_version(): string;
declare function set_plugin_info(table: LuaTable): void;
declare function format_date(timestamp: Timestamp): string;
declare function format_time(timestamp: Timestamp): string;
declare function get_preference(preference: string): PrefValueType | null;
declare function set_preference(preference: string, value: PrefValueType): boolean | null;
declare function reset_preference(preference: string): true | null;
declare function apply_preferences(): void;
declare function report_failure(text: string): void;
declare function loadfile(filename: string): LuaMultiReturn<[Action]> | LuaMultiReturn<[null, LuaErrorString, LuaErrorNumber]>;
declare function dofile(filename: string): LuaMultiReturn<Array<any>>;
declare function register_stat_cmd_arg(argument: string, action?: Action): void;

// #endregion

// #region 11.13. Handling 64-bit Integers
declare interface Int64 {
  encode(endian?: boolean): string;
  (): Int64;
  tonumber(): double;
  tohex(numbytes?: int): string;
  higher(): gint32;
  lower(): guint32;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  __unm: LuaNegationMethod<Int64>;
  __add: LuaAdditionMethod<Int64, Int64>;
  __sub: LuaSubtractionMethod<Int64, Int64>;
  __mul: LuaMultiplicationMethod<Int64, Int64>;
  __div: LuaDivisionMethod<Int64, Int64>;
  __mod: LuaModuloMethod<Int64, Int64>;
  __pow: LuaPowerMethod<Int64, Int64>;
  // __eq(rhs:Int64):boolean;
  // __le(rhs:Int64):boolean;
  // __lt(rhs:Int64):boolean;
  bnot(): Int64;
  band(rhs: Int64): Int64;
  bor(rhs: Int64): Int64;
  bxor(rhs: Int64): Int64;
  lshift(rhs: guint32): Int64;
  rshift(rhs: guint32): Int64;
  arshift(rhs: guint32): Int64;
  rol(rhs: guint32): Int64;
  ror(rhs: guint32): Int64;
  bswap(): Int64;
}
interface Int64Constructor {
  decode: (this: void, string: string, endian?: boolean) => Int64 | null;
  new: (this: void, value?: number | UInt64 | Int64 | string, highvalue?: guint32) => Int64;
  max(): Int64;
  min(): Int64;
  fromhex(hex: string): Int64;
}
declare const Int64: Int64Constructor;

declare interface UInt64 {
  encode(endian?: boolean): string;
  (): UInt64;
  tonumber(): double;
  tohex(numbytes?: int): string;
  higher(): guint32;
  lower(): guint32;
  // __tostring():string;
  // foo.toString() transpile to tostring(foo)
  toString(): string;
  __unm: LuaNegationMethod<UInt64>;
  __add: LuaAdditionMethod<UInt64, UInt64>;
  __sub: LuaSubtractionMethod<UInt64, UInt64>;
  __mul: LuaMultiplicationMethod<UInt64, UInt64>;
  __div: LuaDivisionMethod<UInt64, UInt64>;
  __mod: LuaModuloMethod<UInt64, UInt64>;
  __pow: LuaPowerMethod<UInt64, UInt64>;
  // __eq(rhs:UInt64):boolean;
  // __le(rhs:UInt64):boolean;
  // __lt(rhs:UInt64):boolean;
  bnot(): UInt64;
  band(rhs: UInt64): UInt64;
  bor(rhs: UInt64): UInt64;
  bxor(rhs: UInt64): UInt64;
  lshift(rhs: guint32): UInt64;
  rshift(rhs: guint32): UInt64;
  arshift(rhs: guint32): UInt64;
  rol(rhs: guint32): UInt64;
  ror(rhs: guint32): UInt64;
  bswap(): UInt64;

}
interface UInt64Constructor {
  decode: (this: void, string: string, endian?: boolean) => UInt64 | null;
  new: (this: void, value?: number | UInt64 | Int64 | string, highvalue?: guint32) => UInt64;
  max(): UInt64;
  min(): UInt64;
  fromhex(hex: string): UInt64;
}
declare const UInt64: UInt64Constructor;

// #endregion

// #region 11.14. Binary encode/decode support
// declare interface Struct{
// }
type StructValueType = int | double | Int64 | UInt64 | string;
interface StructConstructor {
  pack: (this: void, format: string, ...values: Array<StructValueType>) => LuaMultiReturn<[string, ...Array<int>]>;
  unpack: (this: void, format: string, struct: string, begin?: int) => LuaMultiReturn<[...Array<StructValueType>, int]>;
  size: (this: void, format: string) => int;
  values: (this: void, format: string) => int;
  tohex: (this: void, bytestring: string, lowercase?: boolean, separator?: string) => string;
  fromhex: (this: void, hexbytes: string, separator?: string) => string;
}
declare const Struct: StructConstructor;
// #endregion

// #region 11.15. GLib Regular Expressions

declare enum GRegex_compile_flags {
  NEWLINE_CR,
  MICRO,
  OPTIMIZE,
  FIRSTLINE,
  JAVASCRIPT_COMPAT,
  DOLLAR_ENDONLY,
  CASELESS,
  NEWLINE_LF,
  BSR_ANYCRLF,
  DOTALL,
  NEWLINE_ANYCRLF,
  NO_AUTO_CAPTURE,
  MINOR,
  UNGREEDY,
  MULTILINE,
  DUPNAMES,
  MAJOR,
  NEWLINE_CRLF,
  ANCHORED,
  EXTENDED,
}
declare enum GRegex_match_flags {
  NEWLINE_CR,
  NEWLINE_ANY,
  NEWLINE_LF,
  NEWLINE_ANYCRLF,
  NOTEMPTY,
  PARTIAL_HARD,
  BSR_ANY,
  PARTIAL_SOFT,
  NOTEMPTY_ATSTART,
  PARTIAL,
  NEWLINE_CRLF,
  NOTEOL,
  NOTBOL,
  ANCHORED,
  BSR_ANYCRLF,
}


type GRegexGmatchIterator = LuaIterable<LuaMultiReturn<Array<string>>>;
type GRegexGsubReplFunction = (s: string) => string;
type GRegexGsubReplType = string | GRegexGsubReplFunction | LuaTable | boolean;
type GRegexSplitIterator = LuaIterable<LuaMultiReturn<Array<string>>>;

declare interface GRegex {
  match(subject: string, init?: int, ef?: GRegex_match_flags): LuaMultiReturn<Array<string>> | LuaMultiReturn<[false | null]>;
  find(subject: string, init?: int, ef?: GRegex_match_flags): LuaMultiReturn<[int, int, ...Array<string>]> | LuaMultiReturn<[false | null]>;
  exec(subject: string, init?: int, ef?: GRegex_match_flags): LuaMultiReturn<[int, int, LuaTable<number, number>]> | LuaMultiReturn<[null]>;
  dfa_exec(subject: string, init?: int, ef?: GRegex_match_flags): LuaMultiReturn<[int, LuaTable<number, number>]> | LuaMultiReturn<[null]>;
}
interface GRegexConstructor {
  new: (this: void, pattern: string) => GRegex;
  flags: (this: void, table?: LuaTable) => LuaTable;
  compile_flags: (this: void, table?: LuaTable) => LuaTable;
  match_flags: (this: void, table?: LuaTable) => LuaTable;
  match: (this: void, subject: string, pattern: string | GRegex, init?: int, cf?: GRegex_compile_flags, ef?: GRegex_match_flags) => LuaMultiReturn<Array<string>> | LuaMultiReturn<[false | null]>;
  find: (this: void, subject: string, pattern: string | GRegex, init?: int, cf?: GRegex_compile_flags, ef?: GRegex_match_flags) => LuaMultiReturn<[int, int, ...Array<string>]> | LuaMultiReturn<[false | null]>;
  gmatch: (this: void, subject: string, pattern: string | GRegex, init?: int, cf?: GRegex_compile_flags, ef?: GRegex_match_flags) => GRegexGmatchIterator;
  gsub: (this: void, subject: string, pattern: string | GRegex, repl?: GRegexGsubReplType, max?: int, cf?: GRegex_compile_flags, ef?: GRegex_match_flags) => LuaMultiReturn<[string, int, int]>;
  split: (this: void, subject: string, sep: string | GRegex, cf?: GRegex_compile_flags, ef?: GRegex_match_flags) => GRegexSplitIterator;
  version: (this: void) => string;
}
declare const GRegex: GRegexConstructor;

// #endregion


