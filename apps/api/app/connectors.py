from abc import ABC, abstractmethod
from typing import Any

class Connector(ABC):
    name: str
    @abstractmethod
    async def health(self) -> dict[str, Any]: ...
    @abstractmethod
    async def sync(self) -> dict[str, Any]: ...

class AmazonConnector(Connector):
    name = "amazon"
    async def health(self):
        return {"connected": False, "reason": "credentials_not_configured"}
    async def sync(self):
        raise RuntimeError("Amazon connector is intentionally disabled until credentials are configured.")

class AmazonAdsConnector(Connector):
    name = "amazon_ads"
    async def health(self):
        return {"connected": False, "reason": "credentials_not_configured"}
    async def sync(self):
        raise RuntimeError("Amazon Ads connector is intentionally disabled until credentials are configured.")
