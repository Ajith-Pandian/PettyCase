export default class Case {
  constructor(
    scid,
    constituents,
    rationale,
    flags,
    info,
    keywords,
    newsTag,
    segments,
    stats,
    updates,
    version,
    history = []
  ) {
    this.scid = scid;
    this.constituents = constituents;
    this.rationale = rationale;
    this.flags = flags;
    this.info = info;
    this.keywords = keywords;
    this.newsTag = newsTag;
    this.segments = segments;
    this.stats = stats;
    this.updates = updates;
    this.version = version;
    this.history = history;
  }
}
